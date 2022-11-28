pipeline {
    environment {
        registry = "bvediner/balancefy-frontend"
        registryCredential = 'dockerhub'
        dockerImage = ''
    }

    agent any

    stages {
        stage('Build docker image') {
            steps {
                echo 'building docker image...'
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }
        stage('Push to registry') {
            steps {
                echo 'deploying docker image frontend...'
                script {
                    docker.withRegistry( '', registryCredential) {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Deploy docker container in EC2 Instance') {
            steps {
                sh "cd /infra/frontend && FRONTEND_IMAGE_VERSION=$registry:$BUILD_NUMBER docker compose up --build -d"
            }
        }
    }
}
