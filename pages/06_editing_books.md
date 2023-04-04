# Editing books

```gherkin {all|1,11|2-5|7-9|12|13}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


```


---

```php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('/^I want to edit (this book)$/')]
    public function iWantToEditThisBook(Book $book): void
    {
        $this->client->buildUpdateRequest(Resources::BOOKS, (string) $book->getId());
    }
    
    // [...]
}
```

---

# Editing books

```gherkin {13|14}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


```

---
transition: fade
---


```php {all|7|8}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I specify its name as :name')]
    #[When('I change its name to :name')]
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

# Editing books

```gherkin {14|15}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


```

---

```php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->client->update();
    }
    
    // [...]
}
```

---

```gherkin {15|16}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


```

---

```php {all|7|8|10-13}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
     #[Then('I should be notified that it has been successfully edited')]
    public function iShouldBeNotifiedThatItHasBeenSuccessfullyEdited(): void
    {
        Assert::true(
            $this->responseChecker->isUpdateSuccessful($this->client->getLastResponse()),
            'Book could not be edited',
        );
    }
    
    // [...]
}
```

---

```gherkin {16|17}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


```

---
transition: fade
---

```php {all|7|8|9}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Then('I should see the book :name in the list')]
    #[Then('the book :name should appear in the list')]
    #[Then('this book with name :name should appear in the list')]
    public function theBookShouldAppearInTheList(string $name): void
    {
        Assert::true(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s does not exist', $name),
        );
    }
    
    // [...]
}
```
