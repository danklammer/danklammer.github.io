<script>
  [].forEach.call(
    document.querySelectorAll(".img-zoom"), 
    function(e){
        
      e.addEventListener("click", function(zoom){
        this.classList.toggle("zoom");
      }, false);

    }
  );
</script>