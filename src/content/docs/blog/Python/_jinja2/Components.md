# Place Holder de formularios
    
```html
<form id="form" method="POST" action="">
{% csrf_token %}
<div class="input-group mb-3">

    {{ user_registration.username }}
</div>
<div class="input-group mb-2">

    {{ user_registration.email }}
</div>
<div class="input-group mb-2">
    
    {{ user_registration.password1 }}
</div>
<div class="input-group mb-2">
    
    {{ user_registration.password2 }}
</div>

<input type="submit" class="w-100 mb-2 btn btn-lg rounded-4 btn-primary"></input>
<hr>
<small class="text-muted">Already have acount?</small>
<a href="{% url 'ecommerce:login' %}" class="ml-2">Login</a>
</form>


<script>
    var form_fields = document.getElementById('form')
    form_fields[1].placeholder = 'Username..';
    form_fields[2].placeholder = 'Email..';
    form_fields[3].placeholder = 'Enter password...';
    form_fields[4].placeholder = 'Re-enter Password...';

    for (var field in form_fields) {
    form_fields[field].className += ' form-control'
    }
</script>
```
    

    
    
# Formulario de contacto tailwind
    
```html
<div class="w-full bg-gray-800 h-screen mb-96 mx-auto" id="contact">
    <div class="bg-gradient-to-b from-teal-800 to-teal-600 h-96"></div>
    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
        <div class="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p class="text-3xl font-bold leading-7 text-center text-white">Contact me</p>

            <!-- Form -->
            <form action="" method="post" id="form_contact">
                {% csrf_token %}

                <div class="md:flex items-center mt-12">
                    <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none text-gray-300">Your mail</label>

                        {{ form.from_email }}

                    </div>
                </div>
                <div class="md:flex items-center mt-12">
                    <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none text-gray-300">Subject</label>
                        {{ form.subject }}
                    </div>
                </div>

                <div>
                    <div class="w-full flex flex-col mt-8">
                        <label class="font-semibold leading-none text-gray-300">Message</label>
                        {{ form.message }}
                    </div>
                </div>
                <div class="flex items-center justify-center w-full">
                    <button
                        class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Send message
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
    const form_contact = document.querySelector("#form_contact")
    for (var field in form_contact) {
        form_contact[field].classList.add("leading-none", "text-gray-50", "p-3", "focus:outline-none", "focus:border-blue-700", "mt-4", "border-0", "bg-gray-800", "rounded")
    }
</script>

<script>

    const add = document.getElementById("add")
    const seeform = document.getElementById("seeform")

    const form = document.getElementById("form")
    let fields = 9

    for (var field of Array(fields).keys()) {
        form[field].classList.add("leading-none", "text-gray-50", "p-3", "focus:outline-none", "focus:border-blue-700", "mt-4", "border-0", "bg-gray-800", "rounded")
        form[field].placeholder = form[field].name
    }
    add.onclick = function () {
        seeform.classList.toggle("hidden")
        add.textContent = "delete"  
    }

</script>


```
    
