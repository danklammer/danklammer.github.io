<script>
  [].forEach.call(
    document.querySelectorAll(".post-content img"), 
    function(e){

      e.parentElement.classList.add("img-zoom");

      e.addEventListener("click", function(zoom){
        this.parentElement.classList.toggle("zoom");
      }, false);

    }
  );
</script>