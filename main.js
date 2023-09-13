function calculoimc(){
    const altura = document.imcform.elements["altura"].value
    const peso = document.imcform.elements["peso"].value
    const imc = peso / (altura * altura)

    const idade = parseInt(document.imcform.elements["idade"].value)
    const sexo = document.imcform.elements["sexo"].value


    if(altura == ""){
        alert("Insira sua altura para funcionar.");
    }
    else{
        if(peso == ""){
            alert("Insira seu peso para funcionar.");
        }
        else{
            if(sexo == "masc"){
                if(idade == 6){
                    if(imc<14.5){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=14.5 && imc<=16.6){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>16.6 && imc<=18){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade == 7){
                    if(imc<15){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=15 && imc<=17.3){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>17.3 && imc<=19.1){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade == 8){
                    if(imc<15.6){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=15.6 && imc<=16.7){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>16.7 && imc<=20.3){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade == 9){
                    if(imc<16.1){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=16.1 && imc<=18.8){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>18.8 && imc<=21.4){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade == 10){
                    if(imc<16.7){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=16.7 && imc<=19.6){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>19.6 && imc<=22.6){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade == 11){
                    if(imc<17.2){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=17.2 && imc<=20.3){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>20.3 && imc<=23.7){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade == 12){
                    if(imc<17.8){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=17.8 && imc<=21.1){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>21.1 && imc<=24.8){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                if(idade == 13){
                    if(imc<18.5){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=18.5 && imc<=21.9){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>21.9 && imc<=25.9){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade == 14){
                    if(imc<19.2){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=19.2 && imc<=22.7){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>22.7 && imc<=26.9){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade == 15){
                    if(imc<19.9){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=19.9 && imc<=23.6){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>23.6 && imc<=27.7){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade>15){
                    if(imc<17){
                        alert("Você está muito abaixo do peso!")
                    }
                    else if(imc>=17 && imc<=18.49){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=18.5 && imc<=24.99){
                        alert("Seu peso está ideal!")
                    }
                    else if(imc>=25 && imc<=29.99){
                        alert("Você está acima do peso ideal!")
                    }
                    else if(imc>=30 && imc<=34.99){
                        alert("Você está com obesidade nível I!")
                    }
                    else if(imc>=35 && imc<=39.99){
                        alert("Você está com obesidade nível II, considerada ‘severa’!")
                    }
                    else{
                        alert("Você está com obesidade nível III, considerada ‘mórbida’!")
                    }
                }
                else if(idade<6){
                    alert("Sua idade é inválida, tente novamente.")
                }
        
            }
            else if(sexo == "fem"){
                if(idade == 6){
                    if(imc<14.3){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=14.3 && imc<=16.1){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>16.1 && imc<=17.4){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                if(idade == 7){
                    if(imc<14.9){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=14.9 && imc<=17.1){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>17.1 && imc<=18.9){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                if(idade == 8){
                    if(imc<15.6){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=15.6 && imc<=18.1){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>18.1 && imc<=20.3){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                if(idade == 9){
                    if(imc<16.3){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=16.3 && imc<=19.1){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>19.1 && imc<=21.7){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                if(idade == 10){
                    if(imc<17){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=17 && imc<=20.1){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>20.1 && imc<=23.2){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                if(idade == 11){
                    if(imc<17.6){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=17.6 && imc<=21.1){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>21.1 && imc<=24.5){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                if(idade == 12){
                    if(imc<18.3){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=18.3 && imc<=22.1){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>22.1 && imc<=25.9){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                if(idade == 13){
                    if(imc<18.9){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=18.9 && imc<=23){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>23 && imc<=27.7){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                if(idade == 14){
                    if(imc<19.3){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=19.3 && imc<=23.8){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>23.8 && imc<=27.9){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                if(idade == 15){
                    if(imc<19.6){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=19.6 && imc<=24.2){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>24.2 && imc<=28.8){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade>15){
                    if(imc<17){
                        alert("Você está muito abaixo do peso!")
                    }
                    else if(imc>=17 && imc<=18.49){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=18.5 && imc<=24.99){
                        alert("Seu peso está ideal!")
                    }
                    else if(imc>=25 && imc<=29.99){
                        alert("Você está acima do peso ideal!")
                    }
                    else if(imc>=30 && imc<=34.99){
                        alert("Você está com obesidade nível I!")
                    }
                    else if(imc>=35 && imc<=39.99){
                        alert("Você está com obesidade nível II, considerada ‘severa’!")
                    }
                    else{
                        alert("Você está com obesidade nível III, considerada ‘mórbida’!")
                    }
                }
                else if(idade<6){
                    alert("Sua idade é inválida, tente novamente.")
                }
            }
            else{
                if(idade == 6){
                    if(imc<14.5){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=14.5 && imc<=16.6){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>16.6 && imc<=18){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade == 7){
                    if(imc<15){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=15 && imc<=17.3){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>17.3 && imc<=19.1){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade == 8){
                    if(imc<15.6){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=15.6 && imc<=16.7){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>16.7 && imc<=20.3){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade == 9){
                    if(imc<16.1){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=16.1 && imc<=18.8){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>18.8 && imc<=21.4){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade == 10){
                    if(imc<16.7){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=16.7 && imc<=19.6){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>19.6 && imc<=22.6){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade == 11){
                    if(imc<17.2){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=17.2 && imc<=20.3){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>20.3 && imc<=23.7){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade == 12){
                    if(imc<17.8){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=17.8 && imc<=21.1){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>21.1 && imc<=24.8){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                if(idade == 13){
                    if(imc<18.5){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=18.5 && imc<=21.9){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>21.9 && imc<=25.9){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade == 14){
                    if(imc<19.2){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=19.2 && imc<=22.7){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>22.7 && imc<=26.9){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade == 15){
                    if(imc<19.9){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=19.9 && imc<=23.6){
                        alert("Você está com o peso ideal!")
                    }
                    else if(imc>23.6 && imc<=27.7){
                        alert("Você está com sobrepeso!")
                    }
                    else{
                        alert("Você está com Obesidade!")
                    }
                }
                else if(idade>15){
                    if(imc<17){
                        alert("Você está muito abaixo do peso!")
                    }
                    else if(imc>=17 && imc<=18.49){
                        alert("Você está abaixo do peso!")
                    }
                    else if(imc>=18.5 && imc<=24.99){
                        alert("Seu peso está ideal!")
                    }
                    else if(imc>=25 && imc<=29.99){
                        alert("Você está acima do peso ideal!")
                    }
                    else if(imc>=30 && imc<=34.99){
                        alert("Você está com obesidade nível I!")
                    }
                    else if(imc>=35 && imc<=39.99){
                        alert("Você está com obesidade nível II, considerada ‘severa’!")
                    }
                    else{
                        alert("Você está com obesidade nível III, considerada ‘mórbida’!")
                    }
                }
                else if(idade<6){
                    alert("Sua idade é inválida, tente novamente.")
                }
            }
        }
    }
}