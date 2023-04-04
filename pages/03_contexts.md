# Contexts

```php
<?php

declare(strict_types=1);

namespace App\Tests\Behat\Context\Api;

use Behat\Behat\Context\Context;

final class ManagingBooksContext implements Context
{
    #[When('I want to browse books')] 
    public function iWantToBrowseBooks(): void
    {
        // [...]
    }
```
