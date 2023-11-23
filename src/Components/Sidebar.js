import React from 'react'

function sidebar() {
  return (
    <div>
         <div class="wrapper">
        <div class="sidebar">
            <div class="profile">
                
                <h1 class="text-white">Logo</h1>
            </div>
            <ul>
              <li>
                <a href="#">
                    <span class="icon"><i class="fas fa-desktop"></i></span>
                    <span class="item">Dashboard</span>
                </a>
            </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-home"></i></span>
                        <span class="item">patient</span>
                    </a>
                </li>
               
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-desktop"></i></span>
                        <span class="item">appointment</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-desktop"></i></span>
                        <span class="item">Billing</span>
                    </a>
                </li>
               
              <hr/>
              <div>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-user-shield"></i></span>
                        <span class="item">support</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-cog"></i></span>
                        <span class="item">Settings</span>
                    </a>
                </li>
              </div>
            </ul>
        </div>
    </div>
    </div>
 



   
  )
}

export default sidebar