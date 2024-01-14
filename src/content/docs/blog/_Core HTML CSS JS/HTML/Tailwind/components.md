# background with click close
 ```html
 
<div id="add_vacant">
    <div  class=" z-10
    w-full flex justify-center 
    fixed inset-x-0 inset-y-0 
    ">

    <!-- background with click close -->
        <div onclick="showing('#add_vacant')" 
        class="z-0
        fixed w-full h-full
        bg-black bg-opacity-50">
    <!-- background with click close -->

        </div>
        <div class="
        flex justify-center 
        inset-x-0 inset-y-0 
        py-[20%] md:py-[10%]">

        <!-- form card -->
        <div class="z-0 
            bg-gray-700 border border-black flex flex-col justify-end my-auto px-5 py-4 rounded-2xl  ">
            <div class="flex justify-between">
                <h1 class="text-xl text-white">Add new vacant</h1>
                <h3 onclick="showing('#add_vacant')"
                class="bg-red-500 px-3 text-white hover:cursor-pointer rounded-md"> x </h3>
            </div>
            <form id="vacantForm" method="POST" class="flex flex-col space-y-2">
                <input type="text" name="" id="">
                <input type="text" name="" id="">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                
                <button class="bg-indigo-600 px-3 font-semibold text-white hover:cursor-pointer rounded-md"
                type="submit" name="VACANTS"> enviar</button>
            </form>

        </div>
        <!-- form card -->


    </div>
    </div>


</div>
 ```
