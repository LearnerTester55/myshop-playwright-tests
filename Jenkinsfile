pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
    steps {
        powershell 'node --version'
        powershell 'npm --version'
    }
}

        stage('Run Playwright Tests') {
            steps {
                powershell 'npx playwright test'
            }
        }
    }
}
