import com.github.gradle.node.npm.task.NpmTask
import com.github.gradle.node.npm.task.NpxTask

plugins {
    id("java")
    id("org.openapi.generator") version "7.12.0" // OpenAPI Generator plugin
    id("org.ajoberstar.git-publish") version "5.1.1" // Git publish plugin for GitHub Pages
    id("com.github.node-gradle.node") version "7.1.0"


}

group = "community.fides"
version = "0.1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(platform("org.junit:junit-bom:5.10.0"))
    testImplementation("org.junit.jupiter:junit-jupiter")
}

node {
    version.set("20.19.0") // Specify Node.js version
    npmVersion.set("11.3.0") // Specify npm version
    download.set(true) // Automatically download and use the specified Node.js
}


tasks.test {
    useJUnitPlatform()
}



// Configure a helper function for shared OpenAPI task configuration
fun configureGeneratorTask(task: org.openapitools.generator.gradle.plugin.tasks.GenerateTask, generatorName: String, outputDir: String, additionalConfigOptions: Map<String, String> = emptyMap()) {
    task.inputSpec.set("$projectDir/openapi.yaml") // Path to OpenAPI file
    task.generatorName.set(generatorName)        // Set the generator type
    task.outputDir.set(layout.buildDirectory.dir(outputDir).map { it.asFile.absolutePath })
    // Set the output directory using layout.buildDirectory
    task.apiPackage.set("$group.api")
    task.modelPackage.set("$group.model")
    task.invokerPackage.set("$group.oid4vp")
    task.group = "openapi"
    task.globalProperties.set(
        mapOf(
            "apiDocs" to "true",
            "modelDocs" to "true"
        )
    )
    task.configOptions.putAll(
        additionalConfigOptions + mapOf(
            "artifactId" to project.name,
            "artifactVersion" to project.version.toString(),
            "licenseName" to "Apache 2.0",
            "licenseUrl" to "https://www.apache.org/licenses/LICENSE-2.0.html"
        )
    )

}

val generateDocumentation by tasks.register<org.openapitools.generator.gradle.plugin.tasks.GenerateTask>("generateDocumentation") {
    inputSpec.set("$projectDir/openapi.yaml")
    generatorName.set("html2") // Use the HTML2 generator from OpenAPI Generator
    outputDir.set(layout.buildDirectory.dir("generated/docs").map { it.asFile.absolutePath })
    group = "openapi"
    globalProperties.set(
        mapOf(
            "apiDocs" to "true",
            "modelDocs" to "true"
        )
    )
    configOptions.putAll(
        mapOf(
            "artifactId" to project.name,
            "artifactVersion" to project.version.toString()
        )
    )
}

// Specific generator tasks using the helper method
val generateTypescriptClient by tasks.register<org.openapitools.generator.gradle.plugin.tasks.GenerateTask>("generateTypescriptClient") {
    configureGeneratorTask(
        this,
        generatorName = "typescript-fetch",
        outputDir = "generated/typescript",
        additionalConfigOptions = mapOf(
            "npmName" to project.name,
            "npmVersion" to project.version.toString()
        )
    )
}

val generateJavaClient by tasks.register<org.openapitools.generator.gradle.plugin.tasks.GenerateTask>("generateJavaClient") {
    configureGeneratorTask(
        this,
        generatorName = "java",
        outputDir = "generated/java"
    )
}

val generateKotlinClient by tasks.register<org.openapitools.generator.gradle.plugin.tasks.GenerateTask>("generateKotlinClient") {
    configureGeneratorTask(
        this,
        generatorName = "kotlin",
        outputDir = "generated/kotlin"
    )
}

val generatePhpClient by tasks.register<org.openapitools.generator.gradle.plugin.tasks.GenerateTask>("generatePhpClient") {
    configureGeneratorTask(
        this,
        generatorName = "php",
        outputDir = "generated/php",
        additionalConfigOptions = mapOf(
            "packageName" to "$group"
        )
    )
}

val generateCsharpClient by tasks.register<org.openapitools.generator.gradle.plugin.tasks.GenerateTask>("generateCsharpClient") {
    configureGeneratorTask(
        this,
        generatorName = "csharp",
        outputDir = "generated/csharp",
        additionalConfigOptions = mapOf(
            "packageName" to "$group"
        )
    )
}

val generateRustClient by tasks.register<org.openapitools.generator.gradle.plugin.tasks.GenerateTask>("generateRustClient") {
    configureGeneratorTask(
        this,
        generatorName = "rust",
        outputDir = "generated/rust",
        additionalConfigOptions = mapOf(
            "packageName" to "$group"
        )
    )
}


// Profile to generate all targets
tasks.register("generateAllClients") {
    group = "openapi"
    description = "Run all OpenAPI code generation tasks"
    dependsOn(generateDocumentation, generateTypescriptClient, generateJavaClient, generateKotlinClient, generatePhpClient, generateCsharpClient, generateRustClient)
}


tasks.register<NpmTask>("installDocusaurus") {
    group = "documentation"
    description = "Installs Docusaurus project dependencies"
    args.set(listOf("install"))
    workingDir = file("documentation") // Path to your Docusaurus directory
    dependsOn(tasks.named("nodeSetup")) // Ensure Node.js is installed before running
}
// Task to build the Docusaurus site
tasks.register<NpmTask>("buildDocusaurus") {
    dependsOn("generateOpenAPIMdx")
    group = "documentation"
    description = "Build the Docusaurus static site"
    args.set(listOf("run", "build"))
    workingDir = file("documentation") // Path to your Docusaurus folder
    dependsOn("installDocusaurus") // Ensure dependencies are installed
}
// Task to build the Docusaurus site
tasks.register<NpxTask>("generateOpenAPIMdx") {
    dependsOn("copyReadme")
    group = "documentation"
    description = "Generate the OpenAPI doc MDX files"
    command.set("docusaurus")
    args.set(listOf("gen-api-docs", "all"))
    workingDir = file("documentation") // Path to your Docusaurus folder
    dependsOn("installDocusaurus") // Ensure dependencies are installed
}
tasks.register<Copy>("copyReadme") {
    group = "documentation"
    description = "Copy files to the Docusaurus documentation folder"
    from(file("README.md"), file("LICENSE.md"), file("CONTRIBUTING.md"), file("openapi.yaml")) // the root README.md file
    into(file("documentation/docs")) // Docusaurus docs folder
//    rename { "README.md"; "readme.md" } // Docusaurus expects lowercase
}

// Task to serve Docusaurus site locally
tasks.register<NpmTask>("serveDocusaurus") {
    group = "documentation"
    description = "Serve the Docusaurus site locally"
    args.set(listOf("run", "start"))
    workingDir = file("documentation")
    dependsOn("installDocusaurus")
}

// Task to deploy to GitHub Pages using gh-pages
tasks.register<NpmTask>("deployDocusaurus") {
    group = "documentation"
    description = "Deploy Docusaurus site to GitHub Pages"
    args.set(listOf("run", "deploy"))
    workingDir = file("documentation")
    dependsOn("buildDocusaurus") // Ensure the site is built before deploying
}
