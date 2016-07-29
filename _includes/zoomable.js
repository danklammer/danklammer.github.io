<script>
  [].forEach.call(
    document.querySelectorAll(".zoomable"), 
    function(e){
        
      e.addEventListener("click", function(zoom){
        this.classList.toggle("zoom");
      }, false);

    }
  );
</script>