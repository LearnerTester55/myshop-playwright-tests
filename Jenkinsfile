pipeline {
    agent any

    stages {
        stage('Check Environment') {
            steps {
                bat 'where node'
                bat 'where npm'
                bat 'node --version'
                bat 'npm --version'
            }
        }
    }
}