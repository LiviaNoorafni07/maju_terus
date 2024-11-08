"use strict";

var KTSignupGeneral = function () {
    var form, submitButton, passwordMeter, validator;

    // Function to check if the password meter score is greater than 50
    var isPasswordValid = function () {
        return passwordMeter.getScore() > 50;
    };

    return {
        init: function () {
            form = document.querySelector("#kt_sign_up_form");
            submitButton = document.querySelector("#kt_sign_up_submit");
            passwordMeter = KTPasswordMeter.getInstance(form.querySelector('[data-kt-password-meter="true"]'));

            // Check if form action URL is valid
            if (!function (e) {
                try {
                    return new URL(e), true;
                } catch (e) {
                    return false;
                }
            }(submitButton.closest("form").getAttribute("action"))) {
                validator = FormValidation.formValidation(form, {
                    fields: {
                        "first-name": {
                            validators: {
                                notEmpty: {
                                    message: "First Name is required"
                                }
                            }
                        },
                        "last-name": {
                            validators: {
                                notEmpty: {
                                    message: "Last Name is required"
                                }
                            }
                        },
                        email: {
                            validators: {
                                regexp: {
                                    regexp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "The value is not a valid email address"
                                },
                                notEmpty: {
                                    message: "Email address is required"
                                }
                            }
                        },
                        password: {
                            validators: {
                                notEmpty: {
                                    message: "The password is required"
                                },
                                callback: {
                                    message: "Please enter valid password",
                                    callback: function (e) {
                                        if (e.value.length > 0) return isPasswordValid();
                                    }
                                }
                            }
                        },
                        "confirm-password": {
                            validators: {
                                notEmpty: {
                                    message: "The password confirmation is required"
                                },
                                identical: {
                                    compare: function () {
                                        return form.querySelector('[name="password"]').value;
                                    },
                                    message: "The password and its confirm are not the same"
                                }
                            }
                        },
                        toc: {
                            validators: {
                                notEmpty: {
                                    message: "You must accept the terms and conditions"
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger({
                            event: {
                                password: false
                            }
                        }),
                        bootstrap: new FormValidation.plugins.Bootstrap5({
                            rowSelector: ".fv-row",
                            eleInvalidClass: "",
                            eleValidClass: ""
                        })
                    }
                });

                submitButton.addEventListener("click", function (event) {
                    event.preventDefault();
                    validator.revalidateField("password");
                    validator.validate().then(function (status) {
                        if (status == "Valid") {
                            submitButton.setAttribute("data-kt-indicator", "on");
                            submitButton.disabled = true;
                            setTimeout(function () {
                                submitButton.removeAttribute("data-kt-indicator");
                                submitButton.disabled = false;
                                Swal.fire({
                                    text: "You have successfully reset your password!",
                                    icon: "success",
                                    buttonsStyling: false,
                                    confirmButtonText: "Ok, got it!",
                                    customClass: {
                                        confirmButton: "btn btn-primary"
                                    }
                                }).then(function (result) {
                                    if (result.isConfirmed) {
                                        form.reset();
                                        passwordMeter.reset();
                                        var redirectUrl = form.getAttribute("data-kt-redirect-url");
                                        if (redirectUrl) location.href = redirectUrl;
                                    }
                                });
                            }, 1500);
                        } else {
                            Swal.fire({
                                text: "Sorry, looks like there are some errors detected, please try again.",
                                icon: "error",
                                buttonsStyling: false,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            });
                        }
                    });
                });

                form.querySelector('input[name="password"]').addEventListener("input", function () {
                    if (this.value.length > 0) validator.updateFieldStatus("password", "NotValidated");
                });
            } else {
                validator = FormValidation.formValidation(form, {
                    fields: {
                        name: {
                            validators: {
                                notEmpty: {
                                    message: "Name is required"
                                }
                            }
                        },
                        email: {
                            validators: {
                                regexp: {
                                    regexp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "The value is not a valid email address"
                                },
                                notEmpty: {
                                    message: "Email address is required"
                                }
                            }
                        },
                        password: {
                            validators: {
                                notEmpty: {
                                    message: "The password is required"
                                },
                                callback: {
                                    message: "Please enter valid password",
                                    callback: function (e) {
                                        if (e.value.length > 0) return isPasswordValid();
                                    }
                                }
                            }
                        },
                        password_confirmation: {
                            validators: {
                                notEmpty: {
                                    message: "The password confirmation is required"
                                },
                                identical: {
                                    compare: function () {
                                        return form.querySelector('[name="password"]').value;
                                    },
                                    message: "The password and its confirm are not the same"
                                }
                            }
                        },
                        toc: {
                            validators: {
                                notEmpty: {
                                    message: "You must accept the terms and conditions"
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger({
                            event: {
                                password: false
                            }
                        }),
                        bootstrap: new FormValidation.plugins.Bootstrap5({
                            rowSelector: ".fv-row",
                            eleInvalidClass: "",
                            eleValidClass: ""
                        })
                    }
                });

                submitButton.addEventListener("click", function (event) {
                    event.preventDefault();
                    validator.revalidateField("password");
                    validator.validate().then(function (status) {
                        if (status == "Valid") {
                            submitButton.setAttribute("data-kt-indicator", "on");
                            submitButton.disabled = true;
                            axios.post(submitButton.closest("form").getAttribute("action"), new FormData(form))
                                .then(function (response) {
                                    if (response) {
                                        form.reset();
                                        const redirectUrl = form.getAttribute("data-kt-redirect-url");
                                        if (redirectUrl) location.href = redirectUrl;
                                    } else {
                                        Swal.fire({
                                            text: "Sorry, looks like there are some errors detected, please try again.",
                                            icon: "error",
                                            buttonsStyling: false,
                                            confirmButtonText: "Ok, got it!",
                                            customClass: {
                                                confirmButton: "btn btn-primary"
                                            }
                                        });
                                    }
                                })
                                .catch(function (error) {
                                    Swal.fire({
                                        text: "Sorry, looks like there are some errors detected, please try again.",
                                        icon: "error",
                                        buttonsStyling: false,
                                        confirmButtonText: "Ok, got it!",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    });
                                })
                                .then(function () {
                                    submitButton.removeAttribute("data-kt-indicator");
                                    submitButton.disabled = false;
                                });
                        } else {
                            Swal.fire({
                                text: "Sorry, looks like there are some errors detected, please try again.",
                                icon: "error",
                                buttonsStyling: false,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            });
                        }
                    });
                });

                form.querySelector('input[name="password"]').addEventListener("input", function () {
                    if (this.value.length > 0) validator.updateFieldStatus("password", "NotValidated");
                });
            }
        }
    };
}();

KTUtil.onDOMContentLoaded(function () {
    KTSignupGeneral.init();
});
