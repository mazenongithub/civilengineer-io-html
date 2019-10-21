
function openmenularge() {
    const myapps = this.myapps();
    let appmenu = [];
    let appdisplay = [];
    myapps.map(myapp => {
        appmenu.push(<div className="general-app-container navigation-subcontainer showborder general-font regularHeight alignCenter"> {myapp.url} </div>)
        appdisplay.push(this.createapp(myapp))
    })

    return (
        <div className="general-container">
            <div className="large-container-1 showborder navigation-container">
                <div className="general-flex">

                    <div className="flex-four showborder alignCenter general-font titleSize bold-font">Apps </div>
                    <div className="flex-one showborder alignRight"><button className="closeMenuIcon general-button">{this.closeMenuIcon()}</button> </div>

                </div>
                {appmenu}


            </div>


            <div className="large-container-2 showborder general-font">
                <div className="content-container showborder alignCenter titleSize content-background bold-font">
                    Welcome to civilengineer.io
                 </div>
                <div className="general-app-container content-container regularHeight bold-font">
                    Delivering Free Open Source Applications to the internet, IOS, and Google Play Markets
    
                  </div>
                {appdisplay}


            </div>
        </div>

    )
}