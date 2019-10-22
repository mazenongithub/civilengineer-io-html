function homepage() {
    const myapps = this.myapps();
    let homepage = [];
    let appdisplay = [];
    myapps.map(myapp => {
        appdisplay.push(this.createapp(myapp))
    })

    if (this.state.width > 720) {
        if (this.state.menu === 'open') {
            homepage.push(<div className="general-app-container content-container regularHeight bold-font">
                Delivering Free Open Source Applications to the internet, IOS, and Google Play Markets
                  </div>)

            homepage.push(this.appdisplay())


        } else if (this.state.menu === 'closed') {

            homepage.push(<div className="general-app-container span-all regularHeight bold-font">
                Delivering Free Open Source Applications to the internet, IOS, and Google Play Markets
      </div>)
            homepage.push(this.appdisplay())

        }
        return homepage;

    } else {
        return (
            <div className="general-flex">
                <div className="flex-one general-font">
                    <div className="general-app-container regularHeight">
                        Delivering Free Open Source Applications to the internet, IOS, and Google Play Markets
          </div>

                    {appdisplay}

                </div>
            </div>
        )
    }
}