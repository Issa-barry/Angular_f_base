pipeline {
    agent any
    tools {
        maven 'node 7'
    }
    stages {
        stage('Example') {
            steps {
                bat 'npm --version'
            }
        }
    }
}