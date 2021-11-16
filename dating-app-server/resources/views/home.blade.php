<!DOCTYPE html>
<html lang="en"><head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Other css -->
    <link rel="stylesheet" href="{{asset('assets/css/animate.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/bootstrap.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/icofont.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/style.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/swiper.css')}}">

    <title>DueLove</title>
</head>

<body>
<!-- preloader start here -->
<div class="preloader" style="display: none;">
    <div class="preloader-inner">
        <div class="preloader-icon">
            <span></span>
            <span></span>
        </div>
    </div>
</div>
<!-- preloader ending here -->


<!-- ==========Header Section Starts Here========== -->
<header class="header-section">
    <div class="header-bottom">
        <div class="container">
            <div class="header-wrapper">
                <div class="logo">
                    <a href="">
                        <img src="{{asset('assets/logo/logo.png')}}" alt="logo">
                    </a>
                </div>
                <div class="menu-area">
                    <a href="{{route('api:logout')}}" class="signup"><i class="icofont-users"></i> <span>LOG OUT</span> </a>

                    <!-- toggle icons -->
                    <div class="header-bar d-lg-none">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="ellepsis-bar d-lg-none">
                        <i class="icofont-info-square"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- ==========Header Section Ends Here========== -->

<!-- ================ Approving Pictures starts here=============== -->
<section class="member-section padding-tb">
    <div class="container">
        <div class="section-header">
            <h2>The following pictures need approval!</h2>
        </div>
        <div class="section-wrapper">
            <div class="row justify-content-center g-3 g-md-4">
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="lab-item member-item style-1">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="login_data/01_004.jpg" alt="member-img">
                            </div>
                            <div class="lab-content">
                                <h6><a href="">Andrea Guido</a> </h6>
                                <button type="button" class="btn btn-success">Approve picture</button>
                                <button type="button" class="btn btn-danger mt-2">Reject picture</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="lab-item member-item style-1">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="login_data/02_004.jpg" alt="member-img">
                            </div>
                            <div class="lab-content">
                                <h6><a href="">Gihan-Fernando</a></h6>
                                <button type="button" class="btn btn-success">Approve picture</button>
                                <button type="button" class="btn btn-danger mt-2">Reject picture</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="lab-item member-item style-1">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="login_data/03_003.jpg" alt="member-img">
                            </div>
                            <div class="lab-content">
                                <h6><a href="">Sweet Admin</a></h6>
                                <button type="button" class="btn btn-success">Approve picture</button>
                                <button type="button" class="btn btn-danger mt-2">Reject picture</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="lab-item member-item style-1">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="login_data/04_002.jpg" alt="member-img">
                            </div>
                            <div class="lab-content">
                                <h6><a href="">Gyan-Baffour</a></h6>
                                <button type="button" class="btn btn-success">Approve picture</button>
                                <button type="button" class="btn btn-danger mt-2">Reject picture</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="lab-item member-item style-1">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="login_data/05.jpg" alt="member-img">
                            </div>
                            <div class="lab-content">
                                <h6><a href="">Teszt Eleking</a></h6>
                                <button type="button" class="btn btn-success">Approve picture</button>
                                <button type="button" class="btn btn-danger mt-2">Reject picture</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="lab-item member-item style-1">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="login_data/06.jpg" alt="member-img">
                            </div>
                            <div class="lab-content">
                                <h6><a href="">Zeahra Guido</a>
                                </h6>
                                <button type="button" class="btn btn-success">Approve picture</button>
                                <button type="button" class="btn btn-danger mt-2">Reject picture</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- ================ Approving Pictures ends here =============== -->


<!-- ================ Highlighting user Section starts here =============== -->
<section class="top-member-section padding-tb">
    <div class="container">
        <div class="section-header">
            <h2>List of users</h2>
        </div>
        <div class="section-wrapper">
            <div class="grid-memberlist" style="position: relative; height: 650.4px;">
                <div class="grid-member filter-item girl" style="position: absolute; left: 0px; top: 0px;">
                    <div class="lab-item member-item style-1 style-2">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="login_data/01_004.jpg" alt="member-img">
                            </div>
                            <div class="lab-content">
                                <h6><a href="">Johanna</a> </h6>
                                <button type="button" class="btn btn-success">Add to list of Highlighted</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-member filter-item girl" style="position: absolute; left: 235.2px; top: 0px;">
                    <div class="lab-item member-item style-1 style-2">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="login_data/03_003.jpg" alt="member-img">
                            </div>
                            <div class="lab-content">
                                <h6><a href="">Selinae</a> </h6>
                                <button type="button" class="btn btn-success">Add to list of Highlighted</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-member filter-item boy" style="position: absolute; left: 470.4px; top: 0px;">
                    <div class="lab-item member-item style-1 style-2">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="login_data/02_004.jpg" alt="member-img">
                            </div>
                            <div class="lab-content">
                                <h6><a href="">Andrea Guido</a> </h6>
                                <button type="button" class="btn btn-danger">Remove from list of highlighted</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-member filter-item boy" style="position: absolute; left: 705.6px; top: 0px;">
                    <div class="lab-item member-item style-1 style-2">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="login_data/04_002.jpg" alt="member-img">
                            </div>
                            <div class="lab-content">
                                <h6><a href="">Rocky deo</a> </h6>
                                <button type="button" class="btn btn-danger">Remove from list of highlighted</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-member filter-item girl" style="position: absolute; left: 940.8px; top: 0px;">
                    <div class="lab-item member-item style-1 style-2">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="login_data/05.jpg" alt="member-img">
                            </div>
                            <div class="lab-content">
                                <h6><a href="">Jhon doe</a> </h6>
                                <button type="button" class="btn btn-success">Add to list of Highlighted</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-member filter-item boy" style="position: absolute; left: 0px; top: 325.2px;">
                    <div class="lab-item member-item style-1 style-2">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="login_data/06.jpg" alt="member-img">
                            </div>
                            <div class="lab-content">
                                <h6><a href="">Angelina</a> </h6>
                                <button type="button" class="btn btn-success">Add to list of Highlighted</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-member filter-item girl" style="position: absolute; left: 235.2px; top: 325.2px;">
                    <div class="lab-item member-item style-1 style-2">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="login_data/07.jpg" alt="member-img">
                            </div>
                            <div class="lab-content">
                                <h6><a href="">Andrea Guido</a> </h6>
                                <button type="button" class="btn btn-danger">Remove from list of highlighted</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-member filter-item boy" style="position: absolute; left: 470.4px; top: 325.2px;">
                    <div class="lab-item member-item style-1 style-2">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="login_data/08.jpg" alt="member-img">
                            </div>
                            <div class="lab-content">
                                <h6><a href="">Jene Aiko</a> </h6>
                                <button type="button" class="btn btn-danger">Remove from list of highlighted</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-member filter-item girl" style="position: absolute; left: 705.6px; top: 325.2px;">
                    <div class="lab-item member-item style-1 style-2">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="login_data/09.jpg" alt="member-img">
                            </div>
                            <div class="lab-content">
                                <h6><a href="">Anna haek</a> </h6>
                                <button type="button" class="btn btn-success">Add to list of Highlighted</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-member filter-item boy" style="position: absolute; left: 940.8px; top: 325.2px;">
                    <div class="lab-item member-item style-1 style-2">
                        <div class="lab-inner">
                            <div class="lab-thumb">
                                <img src="login_data/10.jpg" alt="member-img">
                            </div>
                            <div class="lab-content">
                                <h6><a href="">Andrean Puido</a> </h6>
                                <button type="button" class="btn btn-success">Add to list of Highlighted</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- ================ Highlighting user Section starts here =============== -->


<!-- ================ Messages approval Section Start Here =============== -->
<section class="group-section padding-tb bg-img">
    <div class="container">
        <div class="section-header">
            <h2>Recently sent messages</h2>
        </div>
        <div class="section-wrapper">
            <div class="row g-4">
                <div class="col-xl-6 col-12">
                    <div class="group-item lab-item">
                        <div class="lab-inner d-flex flex-wrap align-items-center p-4">
                            <div class="lab-content">
                                <h4>From: user</h4>
                                <h4>To: user</h4>
                                <p>message content</p>
                                <button type="button" class="btn btn-success">Approve msg</button>
                                <button type="button" class="btn btn-danger mt-2">Reject msg</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-12">
                    <div class="group-item lab-item">
                        <div class="lab-inner d-flex flex-wrap align-items-center p-4">
                            <div class="lab-content">
                                <div class="lab-content">
                                    <h4>From: user</h4>
                                    <h4>To: user</h4>
                                    <p>message content</p>
                                    <button type="button" class="btn btn-success">Approve msg</button>
                                    <button type="button" class="btn btn-danger mt-2">Reject msg</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-12">
                    <div class="group-item lab-item">
                        <div class="lab-inner d-flex flex-wrap align-items-center p-4">
                            <div class="lab-content">
                                <h4>From: user</h4>
                                <h4>To: user</h4>
                                <p>message content</p>
                                <button type="button" class="btn btn-success">Approve msg</button>
                                <button type="button" class="btn btn-danger mt-2">Reject msg</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-12">
                    <div class="group-item lab-item">
                        <div class="lab-inner d-flex flex-wrap align-items-center p-4">
                            <div class="lab-content">
                                <h4>From: user</h4>
                                <h4>To: user</h4>
                                <p>message content</p>
                                <button type="button" class="btn btn-success">Approve msg</button>
                                <button type="button" class="btn btn-danger mt-2">Reject msg</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- ================ Messages approval Section Start Here =============== -->


<!-- All Scripts -->
<script src="{{asset('assets/js/bootstrap.js')}}"></script>
<script src="{{asset('assets/js/functions.js')}}"></script>
<script src="{{asset('assets/js/isotope.js')}}"></script>
<script src="{{asset('assets/js/jquery.js')}}"></script>
<script src="{{asset('assets/js/jquery_002.js')}}"></script>
<script src="{{asset('assets/js/swiper.js')}}"></script>
<script src="{{asset('assets/js/waypoints.js')}}"></script>
<script src="{{asset('assets/js/wow.js')}}"></script>


</body></html>