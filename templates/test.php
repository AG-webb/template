<!-- Page Css -->
<link rel="stylesheet" href="assets/css/pages/test.css">
<!-- ========================== -->


<div class="row">
    <div class="column sm-12">
        <div class="components">

            <!-- Switcher -->
            <div class="component">
                <h1 class="h1-font">"Active" Class Toggle Component</h1>
                <div class="switcher">
                    <div class="btn btn_test switcher__item active">
                        <span>Switcher 1</span>
                    </div>
                    <div class="btn btn_test switcher__item">
                        <span>Switcher 2</span>
                    </div>
                    <div class="btn btn_test switcher__item">
                        <span>Switcher 3</span>
                    </div>
                    <div class="btn btn_test switcher__item">
                        <span>Switcher 4</span>
                    </div>
                </div>
                <div class="switcher">
                    <div class="btn btn_test switcher__item">
                        <span>Switcher 1</span>
                    </div>
                    <div class="btn btn_test switcher__item">
                        <span>Switcher 2</span>
                    </div>
                    <div class="btn btn_test switcher__item">
                        <span>Switcher 3</span>
                    </div>
                    <div class="btn btn_test switcher__item">
                        <span>Switcher 4</span>
                    </div>
                </div>
            </div>

            <!-- Toast -->
            <div class="component">
                <h1 class="h1-font">Display Toast Messages</h1>
                <button class="btn btn_test toast-trigger">
                    <span>Display Toast</span>
                </button>
            </div>

            <!-- Select -->
            <div class="component">
                <h1 class="h1-font">Custom Select</h1>
                <div class="custom-select custom-select_filter helvetica-75">
                    <div class="combo-box" data-combo-name="authors" data-combo-value="all">
                        <div class="combo-box-selected">
                            <span>all</span>
                        </div>
                        <div class="combo-box-dropdown">
                            <div class="combo-option selected" data-combo-value="all">
                                <span>all</span> 
                            </div>
                            <div class="combo-option" data-combo-value="1">
                                <span>1</span> 
                            </div>
                            <div class="combo-option" data-combo-value="2">
                                <span>2</span> 
                            </div>
                            <div class="combo-option" data-combo-value="3">
                                <span>3</span> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div class="component">
                <h1 class="h1-font">Modal. Possible classes - ("from-left", "from-right", "error", "success")</h1>
                <button class="btn btn_test modal-trigger" data-modal="main-modal">
                    <span>Open Modal</span>
                </button>
            </div>
        </div>
    </div>
</div>


<!-- Modal -->
<div class="modal main-modal modal_md from-left">
    <div class="modal__wrapper">
        <div class="modal__body">
            <div class="modal__close modal-close">
                <img src="assets/img/icons/close.svg" alt="close">
            </div>
            <!-- Content -->
            <div class="modal__content">
                <div class="row expanded">
                    <div class="column sm-12">
                        <div class="modal__title">Modal test</div>
                        <span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            At voluptates ut enim est ipsum eum iure fugiat nostrum quo
                            eveniet itaque tenetur cum, hic atque consectetur? Officia
                            ipsa doloribus dolor?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            At voluptates ut enim est ipsum eum iure fugiat nostrum quo
                            eveniet itaque tenetur cum, hic atque consectetur? Officia
                            ipsa doloribus dolor?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            At voluptates ut enim est ipsum eum iure fugiat nostrum quo
                            eveniet itaque tenetur cum, hic atque consectetur? Officia
                            ipsa doloribus dolor?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            At voluptates ut enim est ipsum eum iure fugiat nostrum quo
                            eveniet itaque tenetur cum, hic atque consectetur? Officia
                            ipsa doloribus dolor?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            At voluptates ut enim est ipsum eum iure fugiat nostrum quo
                            eveniet itaque tenetur cum, hic atque consectetur? Officia
                            ipsa doloribus dolor?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            At voluptates ut enim est ipsum eum iure fugiat nostrum quo
                            eveniet itaque tenetur cum, hic atque consectetur? Officia
                            ipsa doloribus dolor?
                        </span>
                    </div>
                </div>
            </div>

            <!-- Success Message -->
            <div class="modal__success success-message">
                <div class="row expanded">
                    <div class="column sm-12">
                        Success Message
                    </div>
                </div>
            </div>
            <!-- Error Message -->
            <div class="modal__error error-message">
                <div class="row expanded">
                    <div class="column sm-12">
                        Error Message
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>