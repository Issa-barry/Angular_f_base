pipeline {
     agent {
        docker { image 'node' }
           }
    stages {
        stage('Install') {
            steps {
            sh 'node --version'
            sh 'npm install'
            }
        }
    }
}
