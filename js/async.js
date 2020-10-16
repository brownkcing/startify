function formSubmit(e) {
	e.preventDefault();

	const theForm = e.currentTarget;
	const options = {
		headers: { "Content-Type": "application/x-www-form-urlencoded" }
	}
	const formData = "form-name="+ theForm.name + "&" + serialize(theForm);
	axios.post(
		"/",
		formData,
		options
	)
	.then(function (response) {
		window.location.assign(theForm.action);
	})
	.catch(function (error) {
		console.log(error);
	});
}

surveyForm.addEventListener('submit',formSubmit);