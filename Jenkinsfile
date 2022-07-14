pipeline {
    agent {
        docker {
            image 'node'
            args '-p 30000:30000'
        }
    }

    stages {
        stage('Init first') {
            steps {
                echo 'Initializing..'
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
        stage('Publish') {
            steps {
                echo 'Publishing..'
            }
        }
        stage('Cleanup') {
            steps {
                echo 'Cleaning..'
            }
        }
    }
}
