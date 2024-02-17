'use strict'
// REalizado por: Victoria Quinde, Lizbeth Encalada, Juan Llanghi.
class Student {
    constructor(name, emailStudent, level){
        this.name=name;
        this.emailStudent= emailStudent;
        this.level=level;
    }
        updatemail(){
            alert(`Su email ${this.emailStudent} ha sido registrado con exito`);
        }
        showinfo(){
            alert(`Revisa y acepta tus datos ingresados: ${this.name}, ${this.emailStudent}, ${this.level}`);
        }
    }
let up= new Student("Victoria ", " vquinde", " Preparatoria");
up.updatemail();
up.showinfo();
//PANTALLA 1
class Representante {
    constructor(email, password){
        this.email=email;
        this.pasword = password;
    }
    showinfo() {
        alert(`Bienvenido ${this.email}, a Mat Magic Land`);
    }
    }
let login= new Representante ("victoria.q10@outlook.es", "xxxxxxxx");
login.showinfo();
////// PANTALLA 3

class Level {
    constructor(namelevel, url){
        this.namelevel=namelevel; 
        this.url = url;  
    }
    showlabel() {
        alert(`Bienvenido al grupo ${this.namelevel} de Mat Magic Land`);
    }
    showinfo(){
        alert(`La informacion del nivel al que tertenece es la siguiente ${this.namelevel}, ${url}.`);
    }
    }
let dateLabel= new Level ("inicial 1 ", "https://ciberematinfantil.com/teachers-infantil/teacher/tracking?id=1a379c5d-afff-4090-c643-08dbb8186c1d");
dateLabel.showlabel();
dateLabel.showinfo(); 

// Game
class Game{
    constructor(grade,dees,level){
        this.grade=grade;
        this.dees=dees;
        this.level=level;
        
        }
        showMessage(){
            if (this.dees=='moderado'){
                alert ('Lo haces muy bien');
            }
            if (this.dees=='facil'){
                alert ('falta esfuerzo  ');
            }
            if (this.dees=='moderado'){
                alert ('Lo haces muy bien');
            }  
        }
    }
    let juangame= new Game (7,6,1);
    juangame.showMessage();