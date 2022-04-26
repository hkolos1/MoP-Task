import React from 'react'
import './homepage.css'


const Homepage = () => {
    return (
        <div className="parent">
            <div class="row">

                <div class="col-md">
                    <h3>Latest Questions</h3>
                    <ul class="list-group">
                        <li class="list-group-item">If You Had Three Wishes, What Would You Wish For?</li>
                        <li class="list-group-item">What Would You Rather Throw Away: Love Or Money?</li>
                        <li class="list-group-item">What's The Most Beautiful Place You've Ever Seen?</li>
                        <li class="list-group-item">What Was Your Fondest Memory Of High School?</li>
                        <li class="list-group-item">What's Your Favorite TV Show?</li>
                        <li class="list-group-item">What's The Strangest Thing In Your Refrigerator?</li>
                        <li class="list-group-item">If You Could Interview A Famous Person, Who Would You Choose?</li>
                        <li class="list-group-item">If Your Food Is Bad At A Restaurant, Would You Say Something?</li>
                        <li class="list-group-item">What Are Your Dreams And Ambitions?</li>
                        <li class="list-group-item">If You Could Be Best Friends With A Celebrity, Who Would It Be?</li>
                    </ul>
                    <br></br>
                    <button className="btn btn-success loadMore">Load More</button>
                    <br></br>
                </div>

                <div class="col-md">
                    <div class="row">

                        <div class="col-md">
                            <h3>People with most answers</h3>
                            <ul class="list-group">
                                <li class="list-group-item">Harun Kološ</li>
                                <li class="list-group-item">John Doe</li>
                                <li class="list-group-item">Jane Doe</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div class="col-md">
                    <div class="row" >
                        <div class="col-md">
                            <h3>Hot Questions</h3>
                            <ul class="list-group">
                                <li class="list-group-item">What's Your Favorite TV Show?</li>
                                <li class="list-group-item">What Are Your Dreams And Ambitions?</li>
                                <li class="list-group-item">What Would You Rather Throw Away: Love Or Money?</li>
                                <li class="list-group-item">If You Could Be Best Friends With A Celebrity, Who Would It Be?</li>
                                <li class="list-group-item">What Was Your Fondest Memory Of High School?</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
