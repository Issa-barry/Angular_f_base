pipeline {
    agent any
    stages {
        stage('Build') {
            agent {
                any {
                    image 'node'
                    // Run the container on the node specified at the
                    // top-level of the Pipeline, in the same workspace,
                    // rather than on a new node entirely:
                    reuseNode true
                }
            }
            steps {
                sh 'npm install'
            }
        }
    }
}