async function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const textResponse = await response.text(); // Leitura como texto
        console.log("Resposta do servidor:", textResponse); // Verifique o que está sendo retornado

        let data;
        // Tentando analisar o JSON, caso a resposta seja um JSON válido
        try {
            data = JSON.parse(textResponse);
        } catch (err) {
            console.error("Erro ao parsear JSON:", err);
            alert("Resposta do servidor não é JSON válido.");
            return;
        }

        // Se a resposta do servidor for um erro (status diferente de 200-299)
        if (!response.ok) {
            alert(data.message || "Erro ao fazer login: " + response.status); // Mensagem de erro
            return;
        }

        // Se a resposta for bem-sucedida
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.email);

        alert(data.message || "Login bem-sucedido!"); // Mensagem de sucesso

        // Redireciona o usuário para a página inicial ou dashboard após o login
        window.location.href = 'index.html'; 

    } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao fazer login");
    }
}