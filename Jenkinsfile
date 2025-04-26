pipeline {
    agent any

    stages {
        stage('Clone Code'){
            steps {
                git branch: 'main', url: 'https://github.com/kumarchy/JenkinsPipeline.git'
            }
        }

        stage('Build & Run Containers'){
            steps {
                sh 'docker-compose up  -d --build'
            }
        }
    }
}