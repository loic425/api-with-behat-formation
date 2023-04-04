# Adding books

```gherkin {all|1,10|2-5|7-8|11|12}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

```

---

```php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook()
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
}
```

---

```gherkin {12|13}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

```

---
transition: fade
---

```php {all|7|8|10-12}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        if (null !== $name) {
            $this->client->addRequestData('name', $name);
        }
    }
    
    // [...]
}
```

---

```gherkin {13|14}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

```

---

```php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->client->create();
    }
    
    // [...]
}
```

---

```gherkin {14|15}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

```

---

```php {all|7|8|10-13}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Then('I should be notified that it has been successfully created')]
    public function iShouldBeNotifiedThatItHasBeenSuccessfullyCreated(): void
    {
        Assert::true(
            $this->responseChecker->isCreationSuccessful($this->client->getLastResponse()),
            'Book could not be created',
        );
    }
    
    // [...]
}
```

---

```gherkin {15|16}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

```

---

```php {all|7|8}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
   // [...]
    
    #[Then('I should see the book :name in the list')]
    #[Then('the book :name should appear in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s does not exist', $name),
        );
    }
    
    // [...]
}
```
