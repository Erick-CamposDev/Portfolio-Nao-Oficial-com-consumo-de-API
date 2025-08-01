async function fetching() {
    const url = "https://raw.githubusercontent.com/Erick-CamposDev/js-developer-portfolio/main/data/profile.json"
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}

