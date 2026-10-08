pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                powershell 'npm ci'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                powershell 'npx playwright test'
            }
        }
    }
}