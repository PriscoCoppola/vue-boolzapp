/**********************************************
*   BOOLZAPP
**********************************************/

// Day JS Locale
dayjs.locale('it');

// Instanza VUE
const root = new Vue({
    el: '#root',
    data: {
        // Contatti
        contacts: [
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
        // Utente
        user: {
            name: 'Prisco',
            avatar: '_7'
        },
        // Indice attivo
        newIndex: 0,
        // Testo input chat
        newMessage: '',
        // Testo input navbar
        userFilter: '',
        // Ultimo accesso
        access: '',
        // Emoji
        emojiVisible: false,
        emoji: [
            {code: '😃'},
            {code: '😅'},
            {code: '😂'},
            {code: '🤣'},
            {code: '🥲'},
            {code: '😊'},
            {code: '😇'},
            {code: '🙃'},
            {code: '😉'},
            {code: '😌'},
            {code: '😍'},
            {code: '🥰'},
            {code: '😘'},
            {code: '😋'},
            {code: '😝'},
            {code: '😜'},
            {code: '🤪'},
            {code: '🤨'},
            {code: '🧐'},
            {code: '🤓'},
            {code: '😎'},
            {code: '🥸'},
            {code: '🤩'},
            {code: '🥳'},
            {code: '😏'},
            {code: '😒'},
            {code: '😞'},
            {code: '😔'},
            {code: '😟'},
            {code: '😕'},
            {code: '🙁'},
            {code: '😣'},
            {code: '😖'},
            {code: '😫'},
            {code: '😩'},
            {code: '🥺'},
            {code: '😢'},
            {code: '😭'},
            {code: '😤'},
            {code: '😠'},
            {code: '😡'},
            {code: '🤬'},
            {code: '🤯'},
            {code: '😳'},
            {code: '🥵'},
            {code: '🥶'},
            {code: '😱'},
            {code: '😨'},
            {code: '😰'},
            {code: '😥'},
            {code: '😓'},
            {code: '🤗'},
            {code: '🤔'},
            {code: '🤭'},
            {code: '🤫'},
            {code: '🤥'},
            {code: '😶'},
            {code: '😐'},
            {code: '😑'},
            {code: '😬'},
            {code: '🙄'},
            {code: '😯'},
            {code: '😦'},
            {code: '😧'},
            {code: '🤢'},
            {code: '🤮'},
        ],
        darkModeVisible: false,
    },
    methods: {
        // Selezione indice chat
        chat (index) {
            this.newIndex = index
            console.log(dayjs().format('DD/MM/YYYY'))
        },
        // Aggiunta messaggio e risposto nella chat selezionata
        addMessage() {
            this.contacts[this.newIndex].messages.push({
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: this.newMessage,
                status: 'sent'
            })

            this.emojiVisible = false

            if (this.newMessage.toLowerCase() === 'come va?') {
                setTimeout(() => {
                    this.contacts[this.newIndex].messages.push({
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        message: 'Bene tu?',
                        status: 'received',
                    })
                    this.contacts[this.newIndex].access = `Ultimo accesso oggi alle ${dayjs().format('HH:mm')}`
                }, 1000);
            } else {
                setTimeout(() => {
                    this.contacts[this.newIndex].messages.push({
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        message: 'Va bene',
                        status: 'received'
                    })
                    this.contacts[this.newIndex].access = `Ultimo accesso oggi alle ${dayjs().format('HH:mm')}`
                }, 1000);
            }
            this.newMessage = '';
        },
        // Filtraggio delle chat nella navbar
        userFiltered() {
            this.contacts.forEach((element) => {
               if (element.name.toLowerCase().includes(this.userFilter)) {
                   element.visible = true
               } else {
                   element.visible = false
               }
            })
        },
        // Mostra o nasconde le emoji
        emojiShow() {
            if (this.emojiVisible === false) {
                this.emojiVisible = true
            } else {
                this.emojiVisible = false
            }
        },
        // Aggiunge emoji nell'input della chat
        addEmoji(index) {
            this.newMessage += this.emoji[index].code
        },
        darkMode() {
            if (this.darkModeVisible === false) {
                this.darkModeVisible = true
            } else {
                this.darkModeVisible = false
            } 
        }
    },
});