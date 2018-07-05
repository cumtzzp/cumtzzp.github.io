
class Person {
    constructor(first, last, age, gender, interests){
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    bio(){
        var interestsString = '';
        for (var i = 0; i < this.interests.length; i++) {
            interestsString += this.interests[i];
            if (i != this.interests.length - 1)
                interestsString += i == this.interests.length - 2 ? "和" : "、";
        }
        alert(this.name.first + this.name.last + ' 今年 ' + this.age + ' 岁了。他喜欢 ' + interestsString + '。');
    }
    greeting(){
        alert('大家好！我是 ' + this.name.first + '。');
    }
}


class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject){
        super(first, last, age, gender, interests);
        this.subject = subject;
    }
    greeting(){
        var prefix;
        switch(this.gender.toUpperCase()) {
            case 'MALE':
            case 'M':
            case '男':
                prefix = 'Mr.';
                break;
            case 'FEMALE':
            case 'F':
            case '女':
                prefix = 'Mrs.';
                break;
            default:
                prefix = 'Mx.';
                break;
        }
        alert('大家好！我是 ' + prefix + ' ' + this.name.first + '。很高兴跟大家一起学习《' + this.subject + '》。');
    }
}

export { Person as Human }

