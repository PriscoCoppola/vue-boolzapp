/**********************************************
*   BOOLZAPP
**********************************************/

const root = new Vue({
    el: '#root',
    data: {
        yourPropNameHere: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        user: {
            name: 'Prisco',
            avatar: '_7'
        },
        newName: 'Michele',
        newPhoto: '_1',
        newMessages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di dargli da mangiare',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
        newMessage: '',
        newIndex: 0,
        userFilter: '',
    },
    methods: {
        chat (index) {
            this.newName = this.yourPropNameHere[index].name
            this.newPhoto = this.yourPropNameHere[index].avatar
            this.newMessages = this.yourPropNameHere[index].messages
            this.newIndex = index
        },
        addMessage() {
            this.newMessages.push({
                date: '10/01/2020 15:30:55',
                message: this.newMessage,
                status: 'sent'
            })

            this.newMessage = ''

            setTimeout(() => {
                this.newMessages.push({
                    date: '10/01/2020 15:30:55',
                    message: 'Ok',
                    status: 'received'
                })
            }, 1000)
        }, 
        userFiltered() {
            this.yourPropNameHere.forEach((element) => {
               if (element.name.toLowerCase().includes(this.userFilter)) {
                   element.visible = true
               } else {
                   element.visible = false
               }
            })
        }
    },
});