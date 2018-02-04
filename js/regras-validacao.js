        $(document).ready(function() {
            $("#formularioContato").validate({
                // Define as regras
                rules: {
                    nome: {
                        // campoNome será obrigatório (required) e terá tamanho mínimo (minLength)
                        required: true,
                        minlength: 2
                    },
                    email: {
                        // campoEmail será obrigatório (required) e precisará ser um e-mail válido (email)
                        required: true,
                        email: true
                    },                    
                    assunto: {
                        required: true,
                        minlength: 2
                    },
                    categoria: {
                        required: true,
                    },
                    mensagem: {
                        // campoMensagem será obrigatório (required) e terá tamanho mínimo (minLength)
                        required: true,
                        minlength: 2
                    }
                },
                // Define as mensagens de erro para cada regra
                messages: {
                    nome: {
                        required: "<i class='fa fa-exclamation-triangle'></i>  Digite o seu nome.",
                        minLength: "<i class='fa fa-exclamation-triangle'></i>   O seu nome deve conter no mínimo 2 caracteres."
                    },
                    email: {
                        required: "<i class='fa fa-exclamation-triangle'></i>   Digite o seu e-mail para contato.",
                        email: "<i class='fa fa-exclamation-triangle'></i>   Digite um e-mail válido."
                    },
                    assunto: {
                        required: "<i class='fa fa-exclamation-triangle'></i>   Digite um assunto.",
                        minLength: "<i class='fa fa-exclamation-triangle'></i>   O seu nome deve conter no mínimo 2 caracteres."
                    },
                    categoria: {
                        required: "<i class='fa fa-exclamation-triangle'></i>   Selecionar uma categoria é obrigatório.",
                    },
                    mensagem: {
                        required: "<i class='fa fa-exclamation-triangle'></i> Digite a sua mensagem.",
                        minLength: "<i class='fa fa-exclamation-triangle'></i> A sua mensagem deve conter no mínimo 10 caracteres."
                    }
                }
            });
        });