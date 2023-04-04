# Browsing books

```gherkin {all|8|9|10|14}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui @api
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
```

---

# Contexte de la gestion de books

```php {all|6|7|11|12|14}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private ApiClientInterface $client,
        private ResponseCheckerInterface $responseChecker,
    ) {
    }
    
    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
```

---

# Gestion des paths

```php

declare(strict_types=1);

namespace App\Tests\Behat\Context\Api;

final class Resources
{
    public const BOOKS = 'books';
}
```

---

```gherkin {14|15}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui @api
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
```

---
transition: fade
---

```php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
```

---

```php {13-19|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    / [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }

    #[Then('there should be :amount books in the list')
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::same($this->responseChecker->countCollectionItems($this->client->getLastResponse()), $amount);
    }
}    
```

---

```gherkin {15|16}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui @api
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
```

---
transition: fade
---

```php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::same($this->responseChecker->countCollectionItems($this->client->getLastResponse()), $amount);
    }
}    
```

---

```php {13-20|13|14|16-19}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::same($this->responseChecker->countCollectionItems($this->client->getLastResponse()), $amount);
    }

    #[Then('I should see the book :name in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s does not exist', $name),
        );
    }
}
```
