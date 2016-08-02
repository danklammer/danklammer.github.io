/* JS loaded on everypage */
if ('ontouchstart' in window || navigator.maxTouchPoints) {
  document.getElementsByTagName('html')[0].className += 'touch';
} else {
  document.getElementsByTagName('html')[0].className += 'notouch';
}

/* JS loaded only when requested via modeulejs args */
{% if page.modulejs %}
    {% for js in page.modulejs %}
        {% include {{ js }} %}
    {% endfor %}
{% endif %}