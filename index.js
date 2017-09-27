new Vue({
    el: '#app',
    data: {
        message: 'Hello'
    }
});


new Vue({
    el: '#keyUp',
    data: {
        name: ''
    },
    methods: {
        nameKeyUp: function (event) {
            this.name = event.target.value;
        }
    }
});

new Vue({
    el: '#twoWayDataBindingNumberLazy',
    data: {
        name: '',
        age: 27
    }
})

new Vue({
    el: '#twoWayDataBindingNumber',
    data: {
        name: '',
        age: 27
    }
})

new Vue({
    el: '#twoWayDataBindingName',
    data: {
        name: 'asdf',
        age: 27
    }
})

new Vue({
    el: '#changeText',
    data: {
        html: '<h1>hello</h1>'
    }
})

new Vue({
    el: '#boolean',
    data: {
        items: 0
    }
})

new Vue({
    el: '#multipleElementsAffected',
    data: {
        items: 51
    }
})

new Vue({
    el: '#hide',
    data: {
        isNinja: true
    }
})
setTimeout(function () {
    new Vue({
        el: '#cloak',
        data: {
            message: 'hello'
        }
    })
}, 5000)

new Vue({
    el: '#loopingThroughArrays',
    data: {
        strings: ["stuff", "otherStuff"]
    }
})


new Vue({
    el: '#table',
    data: {
        persons: [
            {name: "john", title: "accountant"},
            {name: "jane", title: "programmer"},
        ],
        companyName: 'vueX'
    }
})

new Vue({
    el: '#accessingArrays',
    data: {
        persons: [
            {name: "john", title: "accountant"},
            {name: "jane", title: "programmer"}
        ],
        companyName: 'vueX'
    }
})

new Vue({
    el: '#loopThroughObjectProperties',
    data: {
        person: {
            name: "jane",
            title: "programmer",
            companyName: 'vueX'
        }
    }
})

new Vue({
    el: '#outputRangeOfNumbers',

})


new Vue({
    el: '#addingToTheDom',
    data: {
        persons: [
            {name: "john", id: 1},
            {name: "jane", id: 0},
        ],
        companyName: 'vueX'
    },
    methods: {
        addNewPerson: function () {
            var highestID = Math.max.apply(Math, this.persons.map(function (p) {
                return p.id;
            }));
            var names = ['Steve', 'George', 'Kyle'];
            this.persons.push({
                    id: highestID + 1,
                    name: names[Math.floor(Math.random() * names.length)]
                }
            )
        },
        reverse: function () {
            this.persons = this.persons.reverse();
        },

    }
})

new Vue({
    el: "#gettersAndSetters",
    data: {
        counter: 1,
        firstName: 'Bo',
        lastName: 'Anderson'
    },
    methods: {
        changeName: function () {
            this.firstName = 'Mark';
            this.lastName = 'Gonzalez';

        },
        changeNameSetter: function () {
            this.fullName = 'Mark Gonzalez';
        }
    },
    computed: {
        fullName: {
            get: function () {
                alert("Assembling full name...");
                return this.firstName + ' ' + this.lastName;
            },
            set: function (newValue) {
                alert("Setting new name: " + newValue);
                var parts = newValue.split(' ');
                this.firstName = parts[0];
                this.lastName = parts[parts.length - 1];
            }
        }
    }
})

new Vue({
    el: "#watchers",
    data:  {
        searchQuery: '',
        results: [],
        isSearching: false
    },
    watch: {
        searchQuery: function(query){
            this.isSearching = true;
            var viewModel = this;
            setTimeout(function(){
                viewModel.results = ['Javascript', 'PHP', 'MySql'];
                viewModel.isSearching = false;
            }, 500)
        }
    }
});

new Vue({
    el: '#filters',
    data: {
        message: 'aloha'
    },
    filters: {
        uppercase: function(value, onlyFirstCharacter) {
            if(!value){
                return '';
            }

            if(onlyFirstCharacter)
            {
                return value.charAt(0).toUpperCase() + value.slice(1);
            }
            else{
                return value.toString().toUpperCase();
            }
        }
    }
})

new Vue({
    el: '#filters2',
    data: {
        message: 'aloha aloha'
    },
    filters: {
        uwfirst: function(value){
            if(!value){
                return '';

            }
            var parts = value.toString().split(' ');
            var uppercasedWords = parts.map(function(word){
                return word.charAt(0).toUpperCase() + word.slice(1);
            });

            return uppercasedWords.join(' ');
        }
    }
})

new Vue({
    el: '#filters3',
    data: {
        message: 'aloha aloha'
    },
    filters: {
        uwfirst: function(value){
            if(!value){
                return '';

            }
            var parts = value.toString().split(' ');
            var uppercasedWords = parts.map(function(word){
                return word.charAt(0).toUpperCase() + word.slice(1);
            });

            return uppercasedWords.join(' ');
        },
        removeSpaces: function(value){
            if(!value){
                return '';
            }
            return value.toString().replace(/ /g, '')
        }
    }
})

new Vue({
    el:"#cssStyling",
    data: {
        color: 'yellow',
    },
    methods: {
        changeColor: function(){
            if(this.color=='blue'){
                this.color = 'red';
            }
            else{
                this.color = 'blue';
            }
        }
    }
})

new Vue({
    el:'#shapes',
    data: {
        shapes: [
            {shapeType: 'circle', animate: true},
            {shapeType: 'square', animate: true},
            {shapeType: 'triangle', direction: 'up', animate: true},
            {shapeType: 'triangle', direction: 'down', animate: true},
            {shapeType: 'triangle', direction: 'left', animate: true},
            {shapeType: 'triangle', direction: 'right', animate: true},
            {shapeType: 'circle', animate: false},
            {shapeType: 'square', animate: false},
            {shapeType: 'triangle', direction: 'up', animate: false},
            {shapeType: 'triangle', direction: 'down', animate: false},
            {shapeType: 'triangle', direction: 'left', animate: false},
            {shapeType: 'triangle', direction: 'right', animate: false},
        ]
    }
})
