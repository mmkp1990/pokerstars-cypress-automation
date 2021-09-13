class Formatters {

    formatString(text){
        return text.replace('kr', '').replace('\u00A0','').trim()
    }

}

export default Formatters
