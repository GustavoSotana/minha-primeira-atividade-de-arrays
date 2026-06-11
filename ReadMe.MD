# Git - Fluxo Básico

```bash
# Configuração global (apenas uma vez no computador)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Inicializar repositório
git init

# Alterar nome da branch padrão para main
git branch -M main

# Adicionar arquivos
git add .

# Criar commit
git commit -m "mensagem do commit"

# Conectar ao repositório remoto
git remote add origin URL_DO_REPOSITORIO

# Enviar para o GitHub
git push -u origin main
```

## Significado dos principais tipos de commit

- **feat**: adiciona uma nova funcionalidade
- **fix**: corrige um erro ou problema
- **refactor**: melhora ou reorganiza o código sem alterar seu funcionamento
- **docs**: altera a documentação
- **style**: ajusta formatação, indentação ou estilo do código
- **test**: cria ou modifica testes
- **chore**: tarefas de manutenção, configuração ou dependências




