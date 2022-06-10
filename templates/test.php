<!-- Page Css -->
<link rel="stylesheet" href="assets/css/pages/test.css">
<!-- ========================== -->


<div class="row">
    <div class="column sm-12">
        <div class="components">

            <!-- Switcher -->
            <div class="component">
                <h1 class="h1-font">"Active" Class Toggle Component</h1>
                <div class="component__wrap">
                <h2 class="h2-font">Default</h2>
                <div class="switcher">
                    <button class="btn btn_lg btn_test switcher__item active">
                        <span>Switcher 1</span>
                    </button>
                    <button class="btn btn_lg btn_test switcher__item">
                        <span>Switcher 2</span>
                    </button>
                    <button class="btn btn_lg btn_test switcher__item">
                        <span>Switcher 3</span>
                    </button>
                    <button class="btn btn_lg btn_test switcher__item">
                        <span>Switcher 4</span>
                    </button>
                </div></div>
                <div class="component__wrap">
                    <h2 class="h2-font">Multiple</h2>
                    <div class="switcher switcher_multiple">
                        <button class="btn btn_lg btn_test switcher__item">
                            <span>Switcher 1</span>
                        </button>
                        <button class="btn btn_lg btn_test switcher__item">
                            <span>Switcher 2</span>
                        </button>
                        <button class="btn btn_lg btn_test switcher__item">
                            <span>Switcher 3</span>
                        </button>
                        <button class="btn btn_lg btn_test switcher__item">
                            <span>Switcher 4</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Buttons -->
            <div class="component">
                <h1 class="h1-font">Button Sizes</h1>
                <div class="btns">
                    <button class="btn btn_test btn_sm">
                        <span>Buttton Sm</span>
                    </button>
                    <button class="btn btn_test btn_md">
                        <span>Buttton Md</span>
                    </button>
                    <button class="btn btn_test btn_lg">
                        <span>Buttton Lg</span>
                    </button>
                    <button class="btn btn_test btn_xl">
                        <span>Buttton Xl</span>
                    </button>
                </div>
            </div>

            <!-- Form Item -->
            <div class="component">
                <h1 class="h1-font">Form Items</h1>
                <form action="#" class="with-validation">
                    <div class="form-fields">
                        <div class="form-fields__item">
                            <div class="form-field form-field_sm">
                                <div class="form-field__label">Field Sm</div>
                                <div class="form-field__target form-field__target_prefix">
                                    <div class="form-field__icon">
                                        <i class="icon icon-arrow-left"></i>
                                    </div>
                                    <input type="text" name="firstName" class="form-field__input">
                                </div>
                                <!-- <div class="form-field__message error">Error message</div> -->
                            </div>
                        </div>
                        <div class="form-fields__item">
                            <div class="form-field form-field_md form-field_underline">
                                <div class="form-field__label">Field Md</div>
                                <div class="form-field__target">
                                    <input type="text" name="lastName" class="form-field__input">
                                </div>
                            </div>
                        </div>
                        <div class="form-fields__item">
                            <div class="form-field form-field_md form-field_legend">
                                <div class="form-field__label">Field Md Phone</div>
                                <div class="form-field__target form-field__target_prefix">
                                    <div class="form-field__icon">
                                        <i class="icon icon-arrow-left"></i>
                                    </div>
                                    <input type="number" name="phone" class="form-field__input">
                                </div>
                            </div>
                        </div>
                        <div class="form-fields__item">
                            <div class="form-field form-field_round form-field_lg">
                                <div class="form-field__label">Field Lg Email</div>
                                <div class="form-field__target form-field__target_suffix">
                                    <div class="form-field__icon">
                                        <i class="icon icon-arrow-right"></i>
                                    </div>
                                    <input type="text" name="email" class="email-validation form-field__input">
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="form-fields__item">
                            <div class="form-field form-field_textarea">
                                <div class="form-field__label">Textarea</div>
                                <div class="form-field__target">
                                    <textarea name="message" class="form-field__input"></textarea>
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn_md btn_test">
                            <span>submit</span>
                        </button>
                    </div>
                </form>
            </div>

            <!-- Shadows -->
            <div class="component">
                <h1 class="h1-font">Shadows List</h1>
                
                <div class="shadow-item shadow-xs h2-font">
                    Shadow Xs
                </div>
                <div class="shadow-item shadow-sm h2-font">
                    Shadow Sm
                </div>
                <div class="shadow-item shadow-md h2-font">
                    Shadow Md
                </div>
            </div>

            <!-- Toast -->
            <div class="component">
                <h1 class="h1-font">Display Toast Messages</h1>
                <button class="btn btn_lg btn_test toast-trigger">
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
                <h1 class="h1-font">Modal. Possible classes - "from-left", "from-right", "center-modal", "error", "success"</h1>
                <button class="btn btn_lg btn_test modal-trigger" data-modal="main-modal">
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
                        <div class="modal__title h1-font">Modal test</div>
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