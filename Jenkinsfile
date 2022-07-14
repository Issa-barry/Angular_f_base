pipeline {
    agent { label 'nodejs8' }

    stages {
        stage('Cleanup') {
            steps {
                cleanWs()
            }
        }
        stage('Init') {
            steps {
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Publishing..'
            }
        }
    }
}
