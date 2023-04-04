# Deleting books

```gherkin {all|3-5|7-10|14}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

```

---

```php {all|7|8}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    #[Given('I am browsing books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->index(Resources::BOOKS);
    }
}

```

---

# Deleting books

```gherkin {14|15}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

```

---

```php {all|7|8|10}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]
    
    #[When('I delete book with name :name')]
    public function iDeleteBookWithName(string $name): void
    {
        $this->client->delete(Resources::BOOKS, (string) $book->getId());
    }
    
    // [...]
}

```

---

# Deleting books

```gherkin {15|16}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

```

---

```php {all||7|8|10-13}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('I should be notified that it has been successfully deleted')]
    public function iShouldBeNotifiedThatItHasBeenSuccessfullyDeleted(): void
    {
        Assert::true(
            $this->responseChecker->isDeletionSuccessful($this->client->getLastResponse()),
            'Book could not be deleted',
        );
    }
    
    // [...]
}

```

---

# Deleting books

```gherkin {16|17}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

```

---

```php {all|7|8|10-13}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('there should not be :name book anymore')
    public function thereShouldNotBeBookAnymore(string $name): void
    {
        Assert::false(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s exists, but it should not', $name),
        );
    }
    
    // [...]
}

```
