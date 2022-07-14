pipeline {
    agent any
    tools {
        maven 'maven'
    }
    stages {
        stage('Example') {
            steps {
                bat 'npm --version'
            }
        }
    }
}