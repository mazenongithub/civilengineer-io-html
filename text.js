function openmenusmall() {

    if (this.state.width > 720) {

        if (this.state.menu === "open") {
            return (this.openmenularge())
        } else {
            return (this.closedmenularge())
        }

    } else {

        return (this.openmenusmall())
    }



}