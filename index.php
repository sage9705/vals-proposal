<?php

class ValentinePage {

    private $noCount;
    private $yesPressed;

    public function __construct() {
        $this->noCount = 0;
        $this->yesPressed = false;
    }

    private function handleNoClick() {
        $this->noCount++;
    }

    private function calculateYesButtonSize() {
        return $this->noCount * 20 + 16;
    }

    public function render() {
        echo '<html lang="en">';
        echo '<head>';
        echo '<meta charset="UTF-8">';
        echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
        echo '<title>Valentine</title>';
        echo '<link rel="stylesheet" href="styles.css">';
        echo '</head>';
        echo '<body>';
        echo '<div class="flex flex-col items-center justify-center h-screen -mt-16">';
        
        echo '<img id="image" class="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />';
        echo '<h1 id="valentineText" class="text-4xl my-4">Will you be my Valentine?</h1>';
        echo '<div>';
        echo '<button id="yesButton" class="yes-button">Yes</button>';
        echo '<button id="noButton" class="no-button">No</button>';
        echo '</div>';
        echo '<div id="resultText"></div>';
        
        echo '<script src="script.js"></script>';
        echo '</div>';
        echo '</body>';
        echo '</html>';
    }

}

// Instantiate the component
$page = new ValentinePage();

// Use the component
$page->render();
?>
