
function openmenularge() {
    const myapps = this.myapps();
    let appmenu = [];
    myapps.map(myapp => {
        appmenu.push(<div className="navigation-subcontainer showborder general-font regularHeight alignCenter"> {myapp.url} </div>)
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


            <div className="large-container-2 showborder">&nbsp;
                  <div className="content-container titleSize general-font content-background bold-font">
                    Welcome to civilengineer.io
                 </div>



            </div>
        </div>

    )
}