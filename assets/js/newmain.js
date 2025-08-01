function updateHeader(profileData){
    const nome = document.getElementById("nome");
    nome.innerText = profileData.name
    
    const foto = document.getElementById("fotoDePerfil");
    foto.src = profileData.photo
    
    const formacao = document.getElementById("formacao");
    formacao.innerText = profileData.job
    
    const localizacao = document.getElementById("localizacao");
    localizacao.innerText = profileData.location
    
    const telefone = document.getElementById("telefone");
    telefone.innerText = profileData.phone
    telefone.href = `tel:${profileData.phone}`
    
    const email = document.getElementById("email");
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById("skillsSoftSkills");
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join("")
}


function updateHardSkills(profileData){
    const hardSkills = document.getElementById("skillsHardSkills");
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill =>`<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"</li>`).join("")
}

function updateLanguages(profileData){
    const languages = document.getElementById("profile.languages")
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join("")
}

function updatePortfolio(profileData){
    const portfolio = document.getElementById("perfilPortfolio")
    portfolio.innerHTML = profileData.portfolio.map(project => {
       return `
       <li>
            <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
            <a href="${project.url}" target="_blank">${project.url}</a>
            <a class="certificate" href="${project.certificate}" target="_blank">Certificado</a>
        </li>
        `
    }).join("")
}

function updateEducation(profileData){
    const education = document.getElementById("education")
    education.innerHTML = profileData.education.map(formation => {
        return `
        <li>
            <h3 class="title">${formation.name}</h3>
            <p class="period">${formation.period}</p>
            <p>${formation.description}</p>
        </li>
        `
    }).join("")
}

(async () =>{
    const profileData = await fetching()
    updateHeader(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateEducation(profileData)
})()