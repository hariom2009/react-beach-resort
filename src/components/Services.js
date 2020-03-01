import React,{Component} from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

export default class Services extends Component{
    state={
        services:[
            {
                icon: <FaCocktail />,
                title: "free Cocktails",
                info: "free Cocktails for family room"
            },
            {
                icon: <FaHiking />,
                title: "free Hiking",
                info: "free Hiking for family room"
            },
            {
                icon: <FaShuttleVan />,
                title: "free Shuttle",
                info: "free Shuttle to AirPort",
            },
            {
                icon: <FaBeer />,
                title: "free Beer",
                info: "free beer for everyone"
            }
        ]
    }
    render(){
        return(
            <section className='services'>
                <Title title="services"/>
                <div className='services-center'>
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='Service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}