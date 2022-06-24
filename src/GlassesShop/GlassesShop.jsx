import { isContentEditable } from '@testing-library/user-event/dist/utils'
import React, { Component } from 'react'
import style from "./style.module.css"


export default class GlassesShop extends Component {
    state = {
        isShow: true,
        name: "",
        price: "",
        desc: "",
        url: ""
    }

    glassesList = [
        {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./images/v1.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 2,
            price: 50,
            name: "GUCCI G8759H",
            url: "./images/v2.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 3,
            price: 30,
            name: "DIOR D6700HQ",
            url: "./images/v3.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 4,
            price: 70,
            name: "DIOR D6005U",
            url: "./images/v4.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 5,
            price: 40,
            name: "PRADA P8750",
            url: "./images/v5.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 6,
            price: 60,
            name: "PRADA P9700",
            url: "./images/v6.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 7,
            price: 80,
            name: "FENDI F8750",
            url: "./images/v7.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 8,
            price: 100,
            name: "FENDI F8500",
            url: "./images/v8.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 9,
            price: 60,
            "name": "FENDI F4300",
            url: "./images/v9.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    changeGlasses = (id) => {
        const index = this.glassesList.findIndex(ele => ele.id == id);

        this.setState({
            isShow: true,
            name: this.glassesList[index].name,
            price: this.glassesList[index].price,
            desc: this.glassesList[index].desc,
            url: this.glassesList[index].url,
        })
    }

    renderGlassesList = () => {
        const content = this.glassesList.map(ele => {
            return (
                <img width={200} src={ele.url} key={ele.id} onClick={() => {
                    this.changeGlasses(ele.id);
                }}></img>
            )
        })
        return content;
    }

    render() {
        return (
            <div className={style.backgroundImage}>
                <header>
                    <h1>TRY GLASSES APP ONLINE</h1>
                </header>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className='p-5'>
                                    <div id={style["model-left"]}>
                                        <img className='img-fluid' src="./images/model.jpg" alt="" />
                                        {this.state.isShow === true && (
                                            <>
                                                <img id={style["virtual-glasses-image"]} src={this.state.url} alt="" />
                                            </>
                                        )}
                                        {this.state.isShow === true && (
                                            <div id={style["virtual-glasses-detail"]}>
                                                <h3>{this.state.name}</h3>
                                                <h4>{this.state.price}</h4>
                                                <p>{this.state.desc}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='p-5'>
                                    <img className="img-fluid" src="./images/model.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={`d-flex align-items-center flex-wrap`} id={style.glassesList}>
                            {this.renderGlassesList()}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
