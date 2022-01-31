
```shell
# apenas imprime o valor
node -p "new Date().toISOString()" 
```

[Regex101 - Para testar expressões regulares](https://regex101.com/)


### Regex

Para a data: `2022-01-31T22:54:05.893Z`

/()/gm -> Group replace, tudo q capturar vai ficar dentro do primeiro grupo (dentro dos parênteses)

- No primeiro grupo, vamos capturar só os números, sendo os quatro primeiros dígitos

```js
/([0-9]{4})/gm
```

- Agora, vamos ignorar o traço e pegar o zero que estiver acompanhado de um a nove OU um, acompanhado de zero a dois

```js
/^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/gm
```

----- 


Usando o Intl e toLocale, se torna mais fácil