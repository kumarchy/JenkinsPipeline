pipeline {
    agent any

    stages {
        stage('Clone Code'){
            steps {
                git 
            }
        }

        stage('Build & Run Containers'){
            steps {
                sh 'sudo docker-compose up  -d --build'
            }
        }
    }
}