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